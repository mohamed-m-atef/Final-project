import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

}






if (typeof document !== 'undefined') {
  // Get all heartrec and activelike elements
  const heartIcons = document.querySelectorAll<HTMLElement>(".heartrec");
  const activeLikeIcons = document.querySelectorAll<HTMLElement>(".activelike");

  // Ensure both heartrec and activelike elements are available and match in number
  if (heartIcons.length !== activeLikeIcons.length) {
      console.error('The number of "heartrec" and "activelike" elements do not match.');
  } else {
      // Loop through the elements and attach event listeners
      heartIcons.forEach((heartIcon, index) => {
          const activeLikeIcon = activeLikeIcons[index];

          // Function to toggle display
          const toggleIcons = () => {
              const isHidden = heartIcon.style.display === "none";
              heartIcon.style.display = isHidden ? "block" : "none";
              activeLikeIcon.style.display = isHidden ? "none" : "block";
          };

          // Attach the same toggle function to both icons
          heartIcon.addEventListener("click", toggleIcons);
          activeLikeIcon.addEventListener("click", toggleIcons);
      });
  }
} else {
  console.error('document is not available. This code runs only in the browser.');
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  // Browser-specific code
  document.addEventListener('DOMContentLoaded', function() {
      const closeAd = () => {
          const ad = document.getElementById('sideAd');
          if (ad) {
              ad.style.display = 'none';
          }
      };

      closeAd(); // Call the function after DOM is ready
  });
} else {
  console.log("Not in a browser environment");
}





if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  document.addEventListener("DOMContentLoaded", function () {
      // Add event listener for all comment icons
      const commentIcons = document.querySelectorAll("#commentIcon");

      commentIcons.forEach((icon, index) => {
          icon.addEventListener("click", function () {
              // Get the corresponding comment section for this post
              const commentSection = document.querySelectorAll(".comment")[index];

              // Type assertion to ensure it's an HTMLElement
              if (commentSection instanceof HTMLElement) {
                  // Toggle the display of the comment section
                  commentSection.style.display = (commentSection.style.display === "none" || commentSection.style.display === "") ? "block" : "none";
              }
          });
      });
  });
}



if (typeof document !== 'undefined') {
  document.addEventListener('click', function (event: MouseEvent) {
      // Check if the clicked element is a comment icon (SVG)
      if (event.target && (event.target as Element).matches('.comment-icon')) {
          // Get the post ID from the nearest parent
          const postId = (event.target as HTMLElement).closest('.post_card')?.id.split('-')[1];

          if (postId) {
              // Get the comment section for this post
              const commentSection = document.getElementById(`commentSection-${postId}`);

              if (commentSection instanceof HTMLElement) {
                  // Toggle visibility of the comment input for this post
                  commentSection.style.display = (commentSection.style.display === 'none' || commentSection.style.display === '') ? 'block' : 'none';
              }
          }
      }
  });
}

