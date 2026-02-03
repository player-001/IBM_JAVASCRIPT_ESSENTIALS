var xhr = new XMLHttpRequest()
var xhr2 = new XMLHttpRequest()
var url = "./health_article.json"
var url2 = "./news.json"

xhr.open("GET", url, true)    //true means async operation
xhr2.open("GET", url2, true)

xhr.responseType = "json"    //expect a JSON file
xhr2.responseType = "json"

xhr.onload = function(){
    var articles = xhr.response.articles
    var articlesDiv = document.getElementById("articles")

    articles.forEach(function(article){
        var articleDiv = document.createElement("div")
        articleDiv.classList.add("article")

        var title = document.createElement("h2")
        title.textContent = article.title

        var description = document.createElement("p")
        description.textContent = article.description

        var waysHeader = document.createElement("h3")
        waysHeader.textContent = "Ways to Achieve"

        var waysList = document.createElement("ul")
        article.ways_to_achieve.forEach(function(way){
            var listItem = document.createElement("li")
            listItem.textContent = way
            waysList.appendChild(listItem)
        })

        var benefitsHeader = document.createElement("h3")
        benefitsHeader.textContent = "Benefits"

        var benefitsList = document.createElement("ul")
        article.benefits.forEach(function(benefit){
            var listItem = document.createElement("li")
            listItem.textContent = benefit
            benefitsList.appendChild(listItem)
        })

        articleDiv.appendChild(title)
        articleDiv.appendChild(description)
        articleDiv.appendChild(waysHeader)
        articleDiv.appendChild(waysList)
        articleDiv.appendChild(benefitsHeader)
        articleDiv.appendChild(benefitsList)
        articlesDiv.appendChild(articleDiv)

    })
}

xhr2.onload = function(){
    var newsDiv = document.getElementById("news")
    var news = xhr2.response.news
    news.forEach((n)=>{
        nDiv = document.createElement('div')
        var head = document.createElement("h3")
        head.textContent = n.head
        nDiv.appendChild(head)

        var body = document.createElement("p")
        body.textContent = n.body
        nDiv.appendChild(body)

        newsDiv.appendChild(nDiv)
    })

}

xhr.send()
xhr2.send()

