import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Meetup 1',
    image: 'https://picsum.photos/200/300',
    address: 'Address 1',
    description: 'Description 1',
  },

  {
    id: 'm2',
    title: 'Meetup 1',
    image: 'https://unsplash.it/200/300',
    address: 'Address 1',
    description: 'Description 1',
  }
];

function HomePage() {
  return (
    <div>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </div>
  );
}

export default HomePage;