import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Thomas_Wolfe%27s_Home.jpg',
    address: '123 Main St',
    description: 'This is the first meetup',
  },

  {
    id: 'm2',
    title: 'Second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Thomas_Wolfe%27s_Home.jpg',
    address: '123 Main St',
    description: 'This is the second meetup',
  },

  {
    id: 'm3',
    title: 'Third meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Thomas_Wolfe%27s_Home.jpg',
    address: '123 Main St',
    description: 'This is the third meetup',
  },

  {
    id: 'm4',
    title: 'first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Thomas_Wolfe%27s_Home.jpg',
    address: '123 Main St',
    description: 'This is the fourth meetup',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export async function getStaticProps() {}

export default HomePage;
