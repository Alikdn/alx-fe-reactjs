import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'; // Import FavoritesList component
import RecommendationsList from './components/RecommendationsList'; // Import RecommendationsList component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Recipe Sharing App</h1>
          <AddRecipeForm />
          <SearchBar /> {/* Add SearchBar component here */}
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<FavoritesList />} /> {/* Route for favorites */}
            <Route path="/recommendations" element={<RecommendationsList />} /> {/* Route for recommendations */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;