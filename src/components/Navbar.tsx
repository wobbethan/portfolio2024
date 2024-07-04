"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ProjectList from "@/helpers/constants/projects";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { cn } from "../lib/utils";
import { Button, buttonVariants } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import sendMail from "../server/sendmail";
import { usePathname } from "next/navigation";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const socialContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openFace, setOpenFace] = useState<boolean>(false);
  const path = usePathname();
  useEffect(() => {
    setOpen(false);
    setOpenFace(false);
  }, [path]);
  return (
    <>
      <nav className="sticky z-[9] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white transition-all">
        <MaxWidthWrapper>
          <div className="flex h-14 items-center justify-between border-b border-zinc-200">
            <Drawer open={openFace} onOpenChange={setOpenFace}>
              <DrawerTrigger asChild>
                <div className="flex z-40 font-semibold cursor-pointer">
                  Ethan<span className="text-primary">&nbsp;Wobb</span>
                </div>
              </DrawerTrigger>
              <DrawerContent className="flex flex-col items-center text-center justify-center">
                <Image
                  src="/face.png"
                  alt="Ethan Wobb Profile Picture"
                  width={200}
                  height={200}
                  className="rounded-full mb-2 mt-4 aspect-square object-cover"
                />

                <DrawerHeader className="flex flex-col items-center text-center justify-center">
                  <DrawerTitle className="flex flex-col gap-2 text-center">
                    <span className="text-2xl">Ethan William Wobb</span>
                    <span className="text-muted-foreground text-lg">
                      Undergraduate Computer Science Student
                    </span>
                    <span className="text-muted-foreground text-sm">
                      University of Florida
                    </span>
                  </DrawerTitle>
                  <DrawerDescription className="flex flex-col text-center justify-center">
                    <span className="mt-5 text-sm">Socials</span>
                    <motion.div
                      className=" relative flex flex-row items-center justify-center gap-5"
                      variants={socialContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div variants={item}>
                        <Link
                          href={"https://www.linkedin.com/in/ethan-wobb/"}
                          className=" shadow-xl rounded-lg p-1  "
                        >
                          <Linkedin className="text-black hover:bg-[#0072B1] hover:text-white rounded-lg p-[2px]" />
                        </Link>
                      </motion.div>
                      <motion.div variants={item}>
                        <Link
                          href={"https://www.instagram.com/ethanwobb/"}
                          className=" rounded-lg p-1 shadow-xl "
                        >
                          <Instagram className="hover:text-white rounded-lg p-[2px] text-black hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
                        </Link>
                      </motion.div>
                      <motion.div variants={item}>
                        <Link
                          href={"https://github.com/wobbethan"}
                          className="rounded-lg p-1 shadow-xl"
                        >
                          <Github className="text-black hover:bg-black hover:text-white rounded-lg p-[2px]" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="flex flex-row items-center gap-5">
                  <Link
                    href={"/"}
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        variant: "outline",
                      }),
                      "hover:bg-slate-200"
                    )}
                  >
                    Home
                  </Link>
                  <DrawerClose>
                    <Button variant="outline" className="hover:bg-slate-200">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <NavigationMenu>
              <NavigationMenuList className="md:flex items-center space-x-4 hidden ">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link href={"/about"}>About</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <Image
                              src="/face.png"
                              alt="Ethan's face"
                              width={200}
                              height={200}
                              className="rounded-full object-cover self-center"
                            />
                            <div className="mb-1 mt-4 text-lg font-medium text-center">
                              Ethan Wobb
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground text-center">
                              University of Florida
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      <Link href="/about">
                        <ListItem
                          title="Professional Timeline"
                          className="cursor-pointer"
                        >
                          Learn about Ethan&apos;s education and accomplishments
                        </ListItem>
                      </Link>{" "}
                      <Link href="/about">
                        <ListItem title="Personal" className="cursor-pointer">
                          Meet Ethan&apos;s friends and favorite albums
                        </ListItem>
                      </Link>{" "}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link href="/projects">Projects</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col items-center justify-center">
                    <Link
                      href={`/projects`}
                      className="flex items-center justify-center hover:bg-accent hover:text-accent-foreground text-center w-[90%] rounded-md mt-3 text-xl font-bold p-2"
                    >
                      View All Projects
                    </Link>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {ProjectList.map((project) => (
                        <Link
                          href={`/projects/${project.link}`}
                          key={project.name}
                        >
                          <ListItem title={project.name}>
                            {project.description}
                          </ListItem>
                        </Link>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Dialog>
                    <DialogTrigger>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Contact
                      </NavigationMenuLink>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Contact</DialogTitle>
                        <DialogDescription>
                          Please fill out the below form and Ethan will get back
                          to you as soon as he can!
                        </DialogDescription>
                      </DialogHeader>
                      <ModalForm />
                    </DialogContent>
                  </Dialog>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="h-full flex items-center space-x-4">
              <Link
                href={"https://ethanwobb.com/wobb_ethan_resume_July_2024.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                locale={false}
                download
                className={buttonVariants({
                  size: "sm",
                  className: "hidden md:flex items-center gap-1",
                })}
              >
                Resumé
              </Link>
              <div className="md:hidden block">
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger asChild>
                    <Button className="z-40 font-semibold cursor-pointer">
                      <Menu />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="flex flex-col items-center text-center justify-center mt-2">
                    <DrawerHeader>
                      <DrawerTitle className="text-2xl mt-2 font-bold">
                        Navigation
                      </DrawerTitle>
                      <DrawerDescription className="mt-5 ">
                        <motion.ul
                          className="flex flex-col items-center justify-center gap-3 "
                          variants={container}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.li
                            className="text-lg font-semibold"
                            variants={item}
                          >
                            <Link
                              href={"/"}
                              className={cn(
                                buttonVariants({
                                  size: "sm",
                                  variant: "ghost",
                                }),
                                "hover:bg-slate-200 text-lg"
                              )}
                            >
                              Home
                            </Link>
                          </motion.li>
                          <motion.li
                            className="text-lg font-semibold"
                            variants={item}
                          >
                            <Link
                              href={"/about"}
                              className={cn(
                                buttonVariants({
                                  size: "sm",
                                  variant: "ghost",
                                }),
                                "hover:bg-slate-200 text-lg"
                              )}
                            >
                              About
                            </Link>
                          </motion.li>
                          <motion.li
                            className="text-lg font-semibold"
                            variants={item}
                          >
                            <Link
                              href={"/projects"}
                              className={cn(
                                buttonVariants({
                                  size: "sm",
                                  variant: "ghost",
                                }),
                                "hover:bg-slate-200 text-lg"
                              )}
                            >
                              Projects
                            </Link>
                          </motion.li>

                          <Dialog>
                            <DialogTrigger asChild>
                              <motion.li
                                className="text-lg font-semibold"
                                variants={item}
                              >
                                <DrawerClose
                                  className={cn(
                                    buttonVariants({
                                      size: "sm",
                                      variant: "ghost",
                                    }),
                                    "hover:bg-slate-200 text-lg cursor-pointer"
                                  )}
                                >
                                  Contact
                                </DrawerClose>
                              </motion.li>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Contact</DialogTitle>
                                <DialogDescription>
                                  Please fill out the below form and Ethan will
                                  get back to you as soon as he can!
                                </DialogDescription>
                              </DialogHeader>
                              <ModalForm />
                            </DialogContent>
                          </Dialog>
                        </motion.ul>
                      </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter className="flex flex-row items-center gap-5">
                      <Link
                        href={
                          "https://ethanwobb.com/wobb_ethan_resume_June_2024.pdf"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        locale={false}
                        download
                        className={buttonVariants({
                          size: "sm",
                          className: "items-center gap-1",
                        })}
                      >
                        Resumé
                      </Link>
                      <DrawerClose>
                        <Button
                          variant="outline"
                          className="hover:bg-slate-200"
                        >
                          Close
                        </Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>{" "}
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  subject: z.string().max(25).min(1),
  message: z.string().max(250).min(1),
});

const ModalForm = ({}) => {
  const [disabled, setDisabled] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
  });
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setDisabled(true);
    sendMail(values);
    toast("Message sent", {
      description: "Ethan will be in touch!",
    });
    setDisabled(false);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Ethan Wobb" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="wobbethan@gmail.com"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Employment Opportunity"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="You're Hired!" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="w-full" disabled={disabled}>
          Send
        </Button>
      </form>
    </Form>
  );
};
