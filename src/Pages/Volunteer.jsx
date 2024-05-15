import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import VolunteerImage from "../assets/volunteer_image.png";

const Volunteer = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center h-screen pt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center">Volunteer Registration</h1>

        <div className="flex flex-col max-w-md pt-10 gap-5">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input type="text" id="fullname" placeholder="Enter you full name" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input type="number" id="mobile" placeholder="Enter your mobile number" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="location">Location</Label>
            <Input type="text" id="location" placeholder="Enter your preferred location" />
          </div>

          <div className="flex justify-start items-center">
            <Checkbox />
            <p className="pl-2">Permission to contact over WhatsApp</p>
          </div>

          <div className="flex justify-start items-center">
            <Checkbox />
            <p className="pl-2">I would like to receive Bhmi's newsletter and emails</p>
          </div>

          <Button variant="default" className="max-w-sm">Submit</Button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <img src={VolunteerImage} className="w-[500px] rounded-lg" />

        <div className="flex gap-10 pt-10">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">2000+</p>
            <p>Volunteers</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">65+</p>
            <p>Cities & Villages</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">80%</p>
            <p>Contribution</p>
          </div>
        </div>  
      </div>
    </div>
  )
}


export default Volunteer