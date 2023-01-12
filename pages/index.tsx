import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { MinusIcon, PhotographIcon, PlusIcon } from "@heroicons/react/solid";
import Header from "../components/header";
import Link from "next/link";
import { projects } from "../projects";
import Footer from "../components/footer";
import path from "path";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roberto De Martino</title>
        <meta name="description" content="Roberto De Martino - fotografo" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-2 my-12 mx-8">
        {projects.map((project, k) => {
          const coverImage = path.join(
            process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_BASE_URL,
            "w_1000,h_1000,c_limit",
            project.contentPath,
            project.coverImage
          );
          const rows = project.rows === 2 ? "lg:row-span-2" : "lg:row-span-1";
          const cols = project.cols === 2 ? "lg:col-span-2" : "lg:col-span-1";
          return (
            <Link href={project.href} key={k}>
              <section
                style={{ backgroundImage: `url(${coverImage})` }}
                className={`row-span-1 ${rows} ${cols}  gap-4 relative bg-cover bg-center`}
                key={k}
              >
                <div className="absolute bottom-8 left-8 text-gray-100 uppercase font-bebas">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    {project.title}
                  </h1>
                  <h3 className="text-base">{project.subtitle}</h3>
                </div>
                <div className="img-overlay absolute inset-0 h-full w-full opacity-0 ">
                  <div className="absolute inset-0 text-center text-5xl text-gray-100 transform grid place-content-center">
                    <div className="flex flex-col items-center">
                      <PhotographIcon className="w-10 h-10 text-white " />
                      <h2 className="text-2xl">Vedi progetto</h2>
                    </div>
                  </div>
                </div>
              </section>
            </Link>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
