import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <>
      <section className="h-screen bg-white flex justify-center items-center text-secColor relative z-[99999999]">
        <SyncLoader color="currentColor" />
      </section>
    </>
  );
}
