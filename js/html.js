// store all data in an array of objects
   const tData = [
    {
        "elementName": "HTML",
        "tagName": "Tag: <html> </html>",
        "function": "Function: Create an HTML document. The root element that contains all other HTML elements."
    },
    {
        "elementName": "HEAD",
        "tagName": "Tag: <head> </head>",
        "function": "Function: Sets off the title and other information that isn't displayed on the web page itself."
    },
    {
        "elementName": "TITLE",
        "tagName": "Tag: <title> </title>",
        "function": "Function: Sets the title of the document, displayed in the browser's title bar or tab."
    },
    {
        "elementName": "BODY",
        "tagName": "Tag: <body> </body>",
        "function": "Function: Contains all the contents of an HTML document, such as text, images, links, etc."
    },
    {
        "elementName": "HEADER",
        "tagName": "Tag: <header> </header>",
        "function": "Function: Represents introductory content, typically a group of introductory or navigational aids."
    },
    {
        "elementName": "NAV",
        "tagName": "Tag: <nav> </nav>",
        "function": "Function: Defines a set of navigation links."
    },
    {
        "elementName": "SECTION",
        "tagName": "Tag:<section> </section>",
        "function": "Function: Defines a section in a document, such as chapters, headers, footers, etc."
    },
     {
        "elementName": "Heading",
        "tagName": "Tag:<h1>……<h6>",
        "function": "Function:<h1> defines the most important heading, <h6> defines the least important heading."
    },
     {
        "elementName": "Paragraph",
        "tagName": "Tag: <p> </p>",
        "function": "Function:HTML <p> element defines a paragraph."
    },
     {
        "elementName": "Links",
        "tagName": "Tag:<a> </a>",
        "function": "Function:<a> defines a hyperlink, which is used to link from one page to another."
    },
     {
        "elementName": "Image",
        "tagName": "Tag:<img>",
        "function": "Function:The source file(src), alternative text(alt), width, and height of the image."
    },
     {
        "elementName": "Comment",
        "tagName": "Tag: <!--...-->",
        "function": "Function:comments are not displayed in the browser, but they can help document your HTML source code."
    },
     {
        "elementName": "Table",
        "tagName": "Tag:<table> </table>",
        "function": "Function:Defines a table in an HTML document, allow developers to organize data in rows and columns."
    },
     {
        "elementName": "DIV",
        "tagName": "Tag: <div> </div>",
        "function": "Function: the <div> tag defines a division or a section in an HTML document, used as a container for HTML elements."
    },
     {
        "elementName": "ID",
        "tagName": "Tag: id=\"...\"",
        "function": "Function: The id attribute specifies a unique id for an HTML element, used to identify the element in CSS and JavaScript."
    },
     {
        "elementName": "Class",
        "tagName": "Tag: class=\"...\"",
        "function": "Function: the class attribute specifies one or more class names for an HTML element, used to point to a class in a style sheet."
    },
     {
        "elementName": "iframe",
        "tagName": "Tag:<iframe> </iframe>",
        "function": "Function:The <iframe> tag specifies an inline frame, used to embed another document within the current HTML document."
    }
];

// 当页面加载完成后执行
function loadData() {
    const mainDiv = document.getElementById('div_main');
    
    // 清空现有的内容（如果不需要可以删除这行）
    mainDiv.innerHTML = '';
    
    // 遍历数据数组，为每个元素创建 HTML 结构
    tData.forEach((item, index) => {
        // 创建外层 div
        const sectionDiv = document.createElement('div');
        sectionDiv.id = `div_section_${index}`;
        sectionDiv.className = 'div_section';
        
        // 创建元素名称 section
        const elementNameSection = document.createElement('section');
        elementNameSection.id = `elementName${index}`;
        elementNameSection.className = 'eleTitle';
        elementNameSection.textContent = item.elementName;
        
        // 创建标签名称 section
        const tagNameSection = document.createElement('section');
        tagNameSection.id = `tagName${index}`;
        tagNameSection.className = 'tagTitle';
        tagNameSection.textContent = item.tagName;
        
        // 创建功能描述 section
        const functionalitySection = document.createElement('section');
        functionalitySection.id = `functionality${index}`;
        functionalitySection.className = 'funcContent';
        functionalitySection.textContent = item.function;
        
        // 将所有 section 添加到 div 中
        sectionDiv.appendChild(elementNameSection);
        sectionDiv.appendChild(tagNameSection);
        sectionDiv.appendChild(functionalitySection);
        
        // 将 div 添加到主容器中
        mainDiv.appendChild(sectionDiv);
    });
}

// 页面加载完成后调用 loadData 函数
window.onload = loadData;