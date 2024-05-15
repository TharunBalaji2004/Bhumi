import React from "react";
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

const Donate = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center pt-10">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold">Donate Now For the Cause</h1>
          <p className="text-lg">
            Make a purposeful one time donation or a sustainable recurring
            donation{" "}
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
              <TableCaption>Tax benefit: 50% applied</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[400px]">Scheme</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[200px] text-center">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Sponsor education for an under-priviledged child
                  </TableCell>
                  <TableCell>Education</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Button className="rounded-r-none">
                        <p>+</p>
                      </Button>
                      <Input
                        type="text"
                        id="text"
                        placeholder=""
                        value="0"
                        className="rounded-none"
                      />
                      <Button className="rounded-l-none">
                        <p>-</p>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">General Fund</TableCell>
                  <TableCell>Food/Clothes/Accomodation</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Button className="rounded-r-none">
                        <p>+</p>
                      </Button>
                      <Input
                        type="text"
                        id="text"
                        placeholder=""
                        value="0"
                        className="rounded-none"
                      />
                      <Button className="rounded-l-none">
                        <p>-</p>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Corpus Fund</TableCell>
                  <TableCell>Bulk</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Button className="rounded-r-none">
                        <p>+</p>
                      </Button>
                      <Input
                        type="text"
                        id="text"
                        placeholder=""
                        value="0"
                        className="rounded-none"
                      />
                      <Button className="rounded-l-none">
                        <p>-</p>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium"></TableCell>
                  <TableCell className="font-bold">TOTAL</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Input
                        type="text"
                        id="text"
                        placeholder=""
                        value="0"
                        className="rounded-none"
                        disabled
                      />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="monthly">
            <Table>
              <TableCaption>Tax benefit: 50% applied</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[400px]">Scheme</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[200px] text-center">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Sponsor education for an under-priviledged child
                  </TableCell>
                  <TableCell>Education</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Button className="rounded-r-none">
                        <p>+</p>
                      </Button>
                      <Input
                        type="text"
                        id="text"
                        placeholder=""
                        value="0"
                        className="rounded-none"
                      />
                      <Button className="rounded-l-none">
                        <p>-</p>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">General Fund</TableCell>
                  <TableCell>Food/Clothes/Accomodation</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Button className="rounded-r-none">
                        <p>+</p>
                      </Button>
                      <Input
                        type="text"
                        id="text"
                        placeholder=""
                        value="0"
                        className="rounded-none"
                      />
                      <Button className="rounded-l-none">
                        <p>-</p>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Corpus Fund</TableCell>
                  <TableCell>Bulk</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Button className="rounded-r-none">
                        <p>+</p>
                      </Button>
                      <Input
                        type="text"
                        id="text"
                        placeholder=""
                        value="0"
                        className="rounded-none"
                      />
                      <Button className="rounded-l-none">
                        <p>-</p>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium"></TableCell>
                  <TableCell className="font-bold">TOTAL</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-row">
                      <Input
                        type="text"
                        id="text"
                        placeholder=""
                        value="0"
                        className="rounded-none"
                        disabled
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
