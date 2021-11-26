let searchable = 
[
    'Fundamentals of programming',
    'Fundamentals of data structures',
    'Fundamentals of algorithms',
    'Theory of computation',
    'Fundamentals of data representation',
    'Fundamentals of computer systems',
    'Fundamentals of computer organisation and architecture',
    'Consequences of uses of computing',
    'Fundamentals of communication and networking',
    'Fundamentals of databases',
    'Big Data',
    'Fundamentals of functional programming',
    'Systematic approach to problem solving',
    'Non-exam assessment - the computing practical project'
]
    const icon = document.querySelector('.icon');
    const search = document.querySelector('.search');
    icon.onclick = function()
    {
        search.classList.toggle('active')
    }

    const results = document.querySelector('.autoComp')
    const input = document.getElementById('mysearch') //

    input.addEventListener('keyup' , (e) =>  
    {
        let results = [];
        let input = input.value;
        if (input.length){
            results = searchable.filter((item)=>
            {
                return item.toLowerCase().includes(input.toLowerCase);
            });
        }
        renderResults(results);
        });

        function renderResults(results){
            if (!results.length){
                return search.classList.remove('show')
            }
        }

        const content = results 
        .map ((item) =>
        {
            return '<li>${item}</li>';
        })

        search.classList.add('show');
        results.innerHTML = '<ul>${content}</ul>';

