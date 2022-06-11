import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return (
    <div>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetUp={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;
