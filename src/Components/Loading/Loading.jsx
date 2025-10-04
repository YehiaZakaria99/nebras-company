import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <>
      <section className="h-screen bg-white flex justify-center items-center text-secColor">
        <SyncLoader color="currentColor" />
      </section>
    </>
  );
}
