import type { InferGetStaticPropsType, GetStaticProps } from 'next';

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps = (async (context) => {
  console.log('getStaticProps is running');
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetStaticProps<{
  repo: Repo;
}>;

export default function Page({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('Page is running');
  return repo.stargazers_count;
}
