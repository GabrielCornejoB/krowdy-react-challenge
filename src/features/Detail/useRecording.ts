import { useState, useEffect, useRef } from "react";

const useRecording = () => {
  const [audioSource] = useState("");
  const [videoSource] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [videoChunks, setVideoChunks] = useState<Blob[]>([]);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);

  const handleStartRecording = () => {
    if (isRecording || !streamRef.current) return;

    recorderRef.current = new MediaRecorder(streamRef.current);
    recorderRef.current.start();
    recorderRef.current.ondataavailable = (event: BlobEvent) => {
      setVideoChunks([...videoChunks, event.data]);
    };
    setIsRecording(true);
  };

  useEffect(() => {
    if (isRecording || videoChunks.length === 0) return;

    const blob = new Blob(videoChunks, {
      type: "video/x-matroska;codecs=avc1,opus",
    });
    setVideoLink(URL.createObjectURL(blob));
    setVideoChunks([]);
  }, [isRecording, videoChunks]);

  const handleStopRecording = () => {
    if (!recorderRef.current) return;

    recorderRef.current.stop();
    setIsRecording(false);
  };

  useEffect(() => {
    const prepareStream = async () => {
      const gotStream = (stream: MediaStream) => {
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      };
      const getStream = async () => {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => {
            track.stop();
          });
        }
        const configs = {
          audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
          video: { deviceId: videoSource ? { exact: videoSource } : undefined },
        };
        try {
          const stream = await navigator.mediaDevices.getUserMedia(configs);
          gotStream(stream);
        } catch (error) {
          console.error(error);
        }
      };
      await getStream();
    };
    prepareStream();
  }, [audioSource, videoSource]);

  return [
    videoRef,
    handleStartRecording,
    handleStopRecording,
    isRecording,
    videoLink,
  ];
};
export default useRecording;
