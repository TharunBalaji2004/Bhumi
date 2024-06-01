import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Minus, Plus } from "lucide-react";

const Donate = () => {
  const [userId, setUserId] = useState("");
  const [educationAmount, setEducationAmount] = useState(0);
  const [generalFundAmount, setGeneralFundAmount] = useState(0);
  const [corpusFundAmount, setCorpusFundAmount] = useState(0);
  const { toast } = useToast();

  const handleIncrement = (setter, increment) => () =>
    setter((prev) => prev + increment);
  const handleDecrement = (setter, decrement) => () =>
    setter((prev) => Math.max(0, prev - decrement));

  const totalAmount = educationAmount + generalFundAmount + corpusFundAmount;

  const handleSubmit = async () => {
    if (totalAmount <= 0) {
      toast({
        variant: "destructive",
        title: "Donation amount cannot be zero",
      });
      return;
    }

    const accessToken = Cookies.get("access-token");

    if (!accessToken) {
      toast({
        variant: "destructive",
        title: "User does not have an account",
        description: "Kindly register or login to submit the form",
      });
      return;
    }

    const decodedToken = await jwtDecode(accessToken);
    setUserId(decodedToken.id);
    console.log(decodedToken);

    try {
      const formData = {
        user_id: decodedToken,
        amount: totalAmount,
        types: [],
      };

      formData.user_id = userId;
      const response = await fetch("http://localhost:3000/api/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseBody = await response.json();
      console.log("RESPONSE: ", responseBody);

      if (responseBody.success) {
        toast({
          title: "Donated successfully",
          description: "😊 Thanks for contributing",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error occurred",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form.",
      });
    }
  };

  return (
    <>
      <Navbar />
      <Toaster />
      <div className="flex flex-col items-center pt-10">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold">Donate Now For the Cause</h1>
          <p className="text-lg">
            Make a purposeful one time donation or a sustainable recurring
            donation
          </p>
        </div>

        <Tabs
          defaultValue="account"
          className="w-[800px] pt-10 flex flex-col items-center"
        >
          <TabsList>
            <TabsTrigger value="account">Donate Once</TabsTrigger>
            <TabsTrigger value="monthly">Donate Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Table>
              <TableCaption>
                <div className="flex justify-center items-center gap-10">
                  <p> Tax benefit: 50% applied</p>
                  <Button
                    variant="default"
                    className="max-w-sm"
                    onClick={handleSubmit}
                  >
                    Donate
                  </Button>
                </div>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[400px]">Scheme</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Unit</TableHead>
                  <TableHead className="w-[200px] text-center">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Sponsor education for an under-privileged child
                  </TableCell>
                  <TableCell>Education</TableCell>
                  <TableCell className="font-bold">₹100</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Button
                        className="rounded-r-none"
                        onClick={handleIncrement(setEducationAmount, 100)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="text"
                        placeholder=""
                        value={educationAmount}
                        className="rounded-none text-center"
                        readOnly
                      />
                      <Button
                        className="rounded-l-none"
                        onClick={handleDecrement(setEducationAmount, 100)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">General Fund</TableCell>
                  <TableCell>Food/Clothes/Accommodation</TableCell>
                  <TableCell className="font-bold">₹200</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Button
                        className="rounded-r-none"
                        onClick={handleIncrement(setGeneralFundAmount, 200)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="text"
                        placeholder=""
                        value={generalFundAmount}
                        className="rounded-none text-center"
                        readOnly
                      />
                      <Button
                        className="rounded-l-none"
                        onClick={handleDecrement(setGeneralFundAmount, 200)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Corpus Fund</TableCell>
                  <TableCell>Bulk</TableCell>
                  <TableCell className="font-bold">₹300</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Button
                        className="rounded-r-none"
                        onClick={handleIncrement(setCorpusFundAmount, 300)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="text"
                        placeholder=""
                        value={corpusFundAmount}
                        className="rounded-none text-center"
                        readOnly
                      />
                      <Button
                        className="rounded-l-none"
                        onClick={handleDecrement(setCorpusFundAmount, 300)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium"></TableCell>
                  <TableCell className="font-bold"></TableCell>
                  <TableCell className="font-bold">TOTAL</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Input
                        type="text"
                        placeholder=""
                        value={"₹" + totalAmount}
                        className="rounded-none"
                        readOnly
                      />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="monthly">
            <Table>
              <TableCaption>
                <div className="flex justify-center items-center gap-10">
                  <p> Tax benefit: 50% applied</p>
                  <Button
                    variant="default"
                    className="max-w-sm"
                    onClick={handleSubmit}
                  >
                    Donate
                  </Button>
                </div>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[400px]">Scheme</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Unit</TableHead>
                  <TableHead className="w-[200px] text-center">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Sponsor education for an under-privileged child
                  </TableCell>
                  <TableCell>Education</TableCell>
                  <TableCell className="font-bold">₹100</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Button
                        className="rounded-r-none"
                        onClick={handleIncrement(setEducationAmount, 100)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="text"
                        placeholder=""
                        value={educationAmount}
                        className="rounded-none"
                        readOnly
                      />
                      <Button
                        className="rounded-l-none"
                        onClick={handleDecrement(setEducationAmount, 100)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">General Fund</TableCell>
                  <TableCell>Food/Clothes/Accommodation</TableCell>
                  <TableCell className="font-bold">₹200</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Button
                        className="rounded-r-none"
                        onClick={handleIncrement(setGeneralFundAmount, 200)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="text"
                        placeholder=""
                        value={generalFundAmount}
                        className="rounded-none"
                        readOnly
                      />
                      <Button
                        className="rounded-l-none"
                        onClick={handleDecrement(setGeneralFundAmount, 200)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Corpus Fund</TableCell>
                  <TableCell>Bulk</TableCell>
                  <TableCell className="font-bold">₹300</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Button
                        className="rounded-r-none"
                        onClick={handleIncrement(setCorpusFundAmount, 300)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="text"
                        placeholder=""
                        value={corpusFundAmount}
                        className="rounded-none"
                        readOnly
                      />
                      <Button
                        className="rounded-l-none"
                        onClick={handleDecrement(setCorpusFundAmount, 300)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium"></TableCell>
                  <TableCell className="font-bold"></TableCell>
                  <TableCell className="font-bold">TOTAL</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Input
                        type="text"
                        placeholder=""
                        value={"₹" + totalAmount}
                        className=""
                        readOnly
                      />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Donate;
