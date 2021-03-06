import Layout from "../components/Layout";
import Feed from "../components/Feed";
import Suggestions from "../components/Suggestions";
// import { openDB } from "../lib/openDB";

function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // // implementar a busca dos dados no mongodb
  // const db = await openDB();
  // const data = await db.collection("feed").find().toArray();

  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar: "tiktok1.jpeg",
        name: "Marcelly Guimarães",
        username: "kurt.cobain",
      },
      description: "Kurt Cobain - clone interface tiktok",
      tags: [{ title: "#youtube" }, { title: "#clone" }],
      songName: "Smells Likes Teen Spirit - Nirvana",
      videoUrl: "../tiktok2.jpeg",
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 2,
      author: {
        id: 1,
        avatar: "tiktok3.jpg",
        name: "Marcelly Guimarães",
        username: "ghostemane",
      },
      description: "Ghostemane - clone interface tiktok",
      tags: [{ title: "#youtube" }, { title: "#clone" }],
      songName: "Mercury - Ghostemane",
      videoUrl: "../tiktok4.png",
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 3,
      author: {
        id: 1,
        avatar: "tiktok5.jpeg",
        name: "Marcelly Guimarães",
        username: "billie.eilish",
      },
      description: "Billie Eilish - clone interface tiktok",
      tags: [{ title: "#youtube" }, { title: "#clone" }],
      songName: "When the party's over - Billie Eilish",
      videoUrl: "../tiktok6.jpeg",
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 4,
      author: {
        id: 1,
        avatar: "tiktok7.jpeg",
        name: "Marcelly Guimarães",
        username: "lil.peep",
      },
      description: "Lil Peep - clone interface tiktok",
      tags: [{ title: "#youtube" }, { title: "#clone" }],
      songName: "Save That Shit - Lil Peep",
      videoUrl: "../tiktok8.jpg",
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 5,
      author: {
        id: 1,
        avatar: "tiktok9.jpeg",
        name: "Marcelly Guimarães",
        username: "twenty.one.pilots",
      },
      description: "Twenty One Pilots - clone interface tiktok",
      tags: [{ title: "#youtube" }, { title: "#clone" }],
      songName: "Stressed Out - Twenty One Pilots",
      videoUrl: "../tiktok10.jpeg",
      likes: 650,
      comments: 10,
      replies: 50,
    },
  ];

  return {
    props: {
      // posts: JSON.parse(JSON.stringify(data)),
      posts: data,
    }, // will be passed to the page component as props
  };
}

export default Index;
