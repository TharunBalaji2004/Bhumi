import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import BlogCardImage from "../assets/blogcard_image.jpg";

const Blogs = () => {
  return (
    <div className="block pt-10">
      <h1 className="text-2xl font-bold text-center">Our Written Blogs</h1>

      <div className="flex justify-center items-end pt-10 gap-5">
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="text">Search by Title</Label>
          <Input type="text" id="text" placeholder="Blog Name" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email">Select Campaign</Label>
          <Input type="text" id="email" placeholder="Blog Name" />
        </div>

        <Button variant="default">Search</Button>
      </div>

      <div className="grid grid-cols-3 px-20 py-10 gap-y-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

const BlogCard = () => {
  return (
    <>
      <Card className="w-[350px] justify-self-center">
        <CardHeader>
          <img src={BlogCardImage} className="rounded-lg" />
          <CardTitle className="py-2">Blog Title</CardTitle>
          <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis urna dolor, convallis et auctor nec, condimentum finibus nisl. Curabitur at finibus purus, tristique hendrerit urna. Morbi egestas tempus augue, laoreet iaculis elit imperdiet ac. Nullam pharetra viverra massa, sed rhoncus ipsum tempus id. Vestibulum eget elit leo. Aliquam venenatis purus non risus auctor, a commodo odio tristique. Donec dapibus nec nulla in tincidunt. Vestibulum fermentum vestibulum dignissim.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Blogs;
