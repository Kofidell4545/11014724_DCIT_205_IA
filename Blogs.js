
        
        function toggleContent(postId) {
            var content = document.getElementById(postId);
            content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
        }

       
        var blogPostTitles = document.querySelectorAll('.blog-post h2');
        blogPostTitles.forEach(function (title, index) {
            var postId = 'blogContent' + (index + 1);
            title.setAttribute('onclick', 'toggleContent("' + postId + '")');

            
            var contentContainer = document.createElement('div');
            contentContainer.id = postId;
            contentContainer.className = 'blog-content';
            contentContainer.innerHTML = '<p>This is the detailed content of the blog post ' + (index + 1) + '</p>';
            title.parentNode.appendChild(contentContainer);
        });