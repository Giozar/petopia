export const getRandomImage = async (animal: 'dog' | 'cat') => {
    const url = animal === 'dog' 
      ? 'https://dog.ceo/api/breeds/image/random'
      : 'https://api.thecatapi.com/v1/images/search';
    
    const response = await fetch(url);
    const data = await response.json();
    return animal === 'dog' ? data.message : data[0].url;
  };
  

  export const getRandomBigImage = async (animal: 'dog' | 'cat') => {
    const url = animal === 'dog' 
    ? 'https://dog.ceo/api/breeds/image/random' 
    : 'https://api.thecatapi.com/v1/images/search?size=full';
      
    // No es necesario hacer un fetch ya que Unsplash devuelve directamente la imagen.
    return url;
  };
  