import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  const user1 = {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: '1.78m',
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  };

  const user2 = {
    lastName: 'Obrien',
    firstName: 'Delores',
    gender: 'female',
    height: '1.72m',
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  };
  return (
    <>
      <h1>IdCard</h1>
      <IdCard user={user1} />
      <IdCard user={user2} />
      <h1>Greetings</h1>
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>
      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </>
  );
}

export default App;
