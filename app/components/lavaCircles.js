const BLOBS = [
  { color: "#000000", size: "clamp(28rem, 52vw, 58rem)", startX: "-24vw", startY: "-28vh", midX: "25vw", midY: "18vh", endX: "5vw", endY: "58vh", duration: "26s", delay: "-12s" },
  { color: "#229b63", size: "clamp(24rem, 46vw, 52rem)", startX: "58vw", startY: "-20vh", midX: "18vw", midY: "31vh", endX: "63vw", endY: "62vh", duration: "31s", delay: "-21s" },
  { color: "#12918b", size: "clamp(22rem, 39vw, 46rem)", startX: "12vw", startY: "51vh", midX: "62vw", midY: "12vh", endX: "-14vw", endY: "20vh", duration: "29s", delay: "-7s" },
  { color: "#f25d0a", size: "clamp(20rem, 36vw, 42rem)", startX: "73vw", startY: "44vh", midX: "-8vw", midY: "60vh", endX: "38vw", endY: "-18vh", duration: "34s", delay: "-27s" },
  { color: "#380d54", size: "clamp(18rem, 31vw, 38rem)", startX: "37vw", startY: "-24vh", midX: "68vw", midY: "45vh", endX: "9vw", endY: "69vh", duration: "28s", delay: "-16s" },
  { color: "#000000", size: "clamp(17rem, 28vw, 34rem)", startX: "-15vw", startY: "35vh", midX: "42vw", midY: "-12vh", endX: "71vw", endY: "33vh", duration: "36s", delay: "-5s" },
  { color: "#229b63", size: "clamp(16rem, 25vw, 30rem)", startX: "64vw", startY: "69vh", midX: "-5vw", midY: "8vh", endX: "48vw", endY: "52vh", duration: "32s", delay: "-24s" },
];

export default function LavaCircles({ stopTranslations }) {
  return (
    <div
      className={`lava-background${stopTranslations ? " is-paused" : ""}`}
      aria-hidden="true"
    >
      {BLOBS.map((blob, index) => (
        <div
          className="lava-blob"
          key={index}
          style={{
            "--blob-color": blob.color,
            "--blob-size": blob.size,
            "--start-x": blob.startX,
            "--start-y": blob.startY,
            "--mid-x": blob.midX,
            "--mid-y": blob.midY,
            "--end-x": blob.endX,
            "--end-y": blob.endY,
            "--duration": blob.duration,
            "--delay": blob.delay,
          }}
        />
      ))}
    </div>
  );
}
