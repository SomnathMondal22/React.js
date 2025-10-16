import Cards from './Components/Cards';

function App() {
  return (
    <div className="parent">
      <Cards
        img="Amazon"
        header="Amazon"
        day="5"
        heading="Senior UI/UX Designer"
        des1="Part-Time"
        des2="Senior Level"
        rate="$120/hr"
        place="Mumbai,India"
        save="bookmark"
        status="Save"
      />
      <Cards
        img="googleLogo"
        header="Google"
        day="30"
        heading="Graphic Designer"
        des1="Part-Time"
        des2="Flexible Schedule"
        rate="$150-220k"
        place="Kochi,India"
        save="darkBookmark"
        status="Saved"
      />
      <Cards
        img="Dribble"
        header="Dribble"
        day="18"
        heading="Senior Motion Designer "
        des1="Contract"
        des2="Remote"
        rate="$85/hr"
        place="Chennai,India"
        save="bookmark"
        status="Save"
      />
      <Cards
        img="Figma"
        header="Figma"
        day="5"
        heading="UX Designer"
        des1="Full-Time"
        des2="In office"
        rate="$200-250k"
        place="Bangalore"
        save="darkBookmark"
        status="Saved"
      />
      <Cards
        img="Airbnb"
        header="Airbnb"
        day="5"
        heading="Junior UI/UX Designer"
        des1="Contract"
        des2="Remote"
        rate="$100/hr"
        place="Delhi,India"
        save="bookmark"
        status="Save"
      />
      <Cards
        img="Apple"
        header="Apple"
        day="5"
        heading="Graphic Designer"
        des1="Full-Time"
        des2="Flexible Schedule"
        rate="$85-120k"
        place="Kerala,India"
        save="darkBookmark"
        status="Saved"
      />
    </div>
  );
}

export default App;
