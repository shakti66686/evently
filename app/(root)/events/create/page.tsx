import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import React from "react";

const CreateEvents = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  return (
    <>
      <section className=" py-5 md:py-10">
        <h3 className=" wrapper text-center h3-bold sm:text-left">Events</h3>
      </section>
      <div className=" wrapper my-8">
        <EventForm userId={userId} type={"create"} />
      </div>
    </>
  );
};

export default CreateEvents;
