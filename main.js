var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fhand-drawn-character-walking-lady-sister-illustration-cartoon-card-love-commercial-element_4026263.html&psig=AOvVaw1CjiT_vYOd0Tmf08emI7iT&ust=1632645132601000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCpzJzbmfMCFQAAAAAdAAAAABAI"];
var names = ["Family Book","Sanjaykumar Mali", "Shweta Mali", "Rashi Mali", "Vaidehi Mali"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
