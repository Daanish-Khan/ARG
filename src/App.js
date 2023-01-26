import AMOG from './/images/AMOG.png';
function App() {
  return (
   <div>
    
    <img src={AMOG} alt="AMOG" />
    <h1>among balls</h1>;
    <form>
    <label>
      Name:
    <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
    </form>
    </div>
  
  );
}
export default App;
