import node from '../assets/node.png'
import express from '../assets/express.png'
import spring from '../assets/spring.png'
import mongodb from '../assets/mongodb.png'
import firebase from '../assets/firebase.png'
import postgre from '../assets/postgresql.png'
import css from '../assets/css.png'
import html from '../assets/html.png';
import mui from '../assets/mui.png';
import jquery from '../assets/jquery.png';
import ts from '../assets/typescript.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import bootstrap from '../assets/bootstrap.png';
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import vscode from '../assets/vscode.png'
import postman from "../assets/postman.png";
import java from "../assets/java.png";
import python from "../assets/python.png";

function Techimage({src, text}){
  return (
    <div className='flex gap-1 items-center px-3 py-2 rounded-xl border border-neutral-500'>
      <img
        src={src}
        alt="nodejs"
        style={{ height: "25px", width: "25px" }}
      />
      <p>{text}</p>
    </div>
  );
}

const Skills = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-32 m-12">
        <h1 className="text-4xl">Skills</h1>
        <p className="text-xl mt-5">
          Here are some of the skills I have acquired over the years.
        </p>
      </div>
      <div className="flex flex-wrap justify-center w-11/12 mx-auto gap-8">
        <div className="w-80  rounded-2xl p-5 border border-rose-700 shadow-md shadow-rose-700 bg-neutral-950">
          <div className="flex justify-center">
            <h1 className="text-3xl text-neutral-400">Backend</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <Techimage src={node} text="Node Js" />
            <Techimage src={express} text="Express Js" />
            <Techimage src={spring} text="Spring Boot" />
            <Techimage src={mongodb} text="MongoDB" />
            <Techimage src={firebase} text="Firebase" />
            <Techimage src={postgre} text="Postresql" />
          </div>
        </div>
        <div className="w-96 rounded-2xl p-5 border border-rose-700 shadow-md shadow-rose-700 bg-neutral-950">
          <div className="flex justify-center">
            <h1 className="text-3xl text-neutral-400">Frontend</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <Techimage src={html} text="HTML" />
            <Techimage src={css} text="CSS" />
            <Techimage src={redux} text="Redux" />
            <Techimage src={react} text="React Js" />
            <Techimage src={bootstrap} text="Bootstrap" />
            <Techimage src={mui} text="Material UI" />
            <Techimage src={ts} text="Typescript" />
            <Techimage src={jquery} text="jQuery" />
            <Techimage src={javascript} text="Javascript" />
            <Techimage src={tailwind} text="Tailwind" />
          </div>
        </div>
        <div className="w-80 rounded-2xl p-5 border border-rose-700 shadow-md shadow-rose-700 bg-neutral-950">
          <div className="flex justify-center">
            <h1 className="text-3xl text-neutral-400">Others</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <Techimage src={github} text="Github" />
            <Techimage src={vscode} text="VS Code" />
            <Techimage src={java} text="Java" />
            <Techimage src={postman} text="Postman" />
            <Techimage src={python} text="Python" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
