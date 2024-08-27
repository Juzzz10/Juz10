import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello, I am Justine. I am a Currently a 3rd year student at University of the Assumption.]</p>

      <p>
      I love grinding games with my friends specially after we've finished our works individually.
      I also love to spread Good Vibes. let's stop the negativity and embrace that life's good.I've always been hooked up to computers since I was a child. 
      And experienced different types of what u can do on it. And as long as you have a computer u can never be bored. That's the reason why I chose IT as my profession.
      I see myself exploring different types of jobs to have more experience and to be more efficient when it comes to making a project.
      I expect to have to learn the basics of being a software dev. My goal is to be a software developer someday and I want to know some decent knowledge about becoming like one.
      I want to learn more about JavaScript, HTML/CSS, SQL, and Java. Because that's the most used language of a software dev.

      </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        
            

      </section>
    </Layout>
  );
}