import { ArrowCircleLeftIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import fs from "fs";
import FsLightbox from "fslightbox-react";
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { projects } from "../../projects";
import styles from "../../styles/Home.module.css";

export async function getStaticPaths() {
  const projectPaths = projects.map((prj) => {
    return {
      params: {
        slug: prj.slug,
      },
    };
  });
  return {
    paths: projectPaths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const project = projects.find((p) => p.slug == params!.slug);
  if (!project) {
    throw new Error("project not found????");
  }
  const projectPath = path.join("public", project.href);
  const images = fs.readdirSync(projectPath);

  return {
    props: {
      images: images
        .filter((img) => img.includes("jpg"))
        .map((img) => path.join("/", project.href, img)),
      project: project,
    },
  };
}

const Project: NextPage = ({
  images,
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }
  const slug = router.query.slug as any;

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="hover:cursor-pointer flex gap-2 items-center">
              <ChevronLeftIcon className="h-5 w-5" />
              <span>HOME</span>
            </div>
          </Link>
          <h1 className="text-center font-bold py-5 text-3xl dark:text-white font-besas">
            {slug}
          </h1>
          <div className="px-10 text-center">
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        </div>
        <div className="container lg:px-32 px-4 py-8 mx-auto items-center ">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
            {images.map((img, k) => (
              <div className="w-full row-span-2" key={k}>
                <img
                  src={img}
                  onClick={() => openLightboxOnSlide(k + 1)}
                  alt="Photo by Roberto De Martino"
                  className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 hover:cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
        <FsLightbox
          toggler={lightboxController.toggler}
          slide={lightboxController.slide}
          sources={images}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Project;
