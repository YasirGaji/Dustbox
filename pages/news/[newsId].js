import { useRouter } from 'next/router';

function NewsPage() {
  const router = useRouter();

  console.log(router.query.newsId);

  return (
    <h1>
      Dynamic Page
    </h1>
  )
}

export default NewsPage;
