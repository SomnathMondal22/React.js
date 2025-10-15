import Card from './components/Card';

function App() {
  return (
    <div className="parent">
      <Card
        user="Somnath"
        age={25}
        img="https://images.unsplash.com/photo-1751097006268-ae4601fcb117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1059"
      />
      <Card
        user="Sonu"
        age={24}
        img="https://images.unsplash.com/photo-1760199129864-df2332e3f3e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"
      />
      <Card
      user ='Allu'
      age = '45'
      img = 'https://plus.unsplash.com/premium_photo-1739104471549-3fba06cd43e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600'/>
    </div>
  );
}

export default App;
