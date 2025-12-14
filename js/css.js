// store all data in an array of objects
   const tData = [
    {
        "elementName": "Css Syntax",
        "tagName": "Tag: <selector> { property: value; }",
        "function": "Function: The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons."
    },
    {
        "elementName": "id Selector",
        "tagName": "Tag: #id",
        "function": "Function: To select an element with a specific id, use the # symbol followed by the id name."
    },
    {
        "elementName": "Class Selector",
        "tagName": "Tag: .class",
        "function": "Function: To select elements with a specific class, use the . symbol followed by the class name."
    },
    {
        "elementName": "Universal Selector",
        "tagName": "Tag: *",
        "function": "Function: The universal selector (*) selects all elements on the page."
    },
    {
        "elementName": "Grouping Selector",
        "tagName": "Tag: selector1, selector2, ...",
        "function": "Function: the grouping selector allows you to apply the same styles to multiple selectors."
    },
    {
        "elementName": "External CSS",
        "tagName": "Tag: <link href=\"styles.css\">",
        "function": "Function: Used to link an external CSS file to an HTML document."
    },
    {
        "elementName": "inline CSS",
        "tagName": "Tag:<tag style=\"property:value;\">",
        "function": "Function: the internal style is defined in hte <style> element within the <head> section of the HTML document."
    },
     {
        "elementName": "CSS Comments",
        "tagName": "Tag:/* comment */",
        "function": "Function:starts with /* and ends with */. Comments are ignored by browsers."
    },
     {
        "elementName": "Borders",
        "tagName": "Tag: border: width style color;",
        "function": "Function:the border property is a shorthand property for setting all the border properties in one declaration."
    },
     {
        "elementName": "Margins",
        "tagName": "Tag: margin: value;",
        "function": "Function: margin property defines the space around elements."
    },
     {
        "elementName": "Padding",
        "tagName": "Tag: padding: value;",
        "function": "Function:padding properties are used to generate space around an element's content, inside of any defined borders."
    },
     {
        "elementName": "Height/Width",
        "tagName": "Tag: height: value; width: value;",
        "function": "Function: used to set the height and width of an element."
    },
     {
        "elementName": "outline",
        "tagName": "Tag: outline: width style color;",
        "function": "Function:an outline is a line that is drawn around elements, outside the border."
    },
     {
        "elementName": "Text",
        "tagName": "Tag: text-align: value;",
        "function": "Function: styling and formatting text."
    },
     {
        "elementName": "Fonts",
        "tagName": "Tag: font-family: name;",
        "function": "Function: specifies the font of the text."
    },
     {
        "elementName": "Icons",
        "tagName": "Tag: <span class=\"icon-class\"></span>",
        "function": "Function: icons can easily be added to your html elements using css."
    },
     {
        "elementName": "Lists",
        "tagName": "Tag:<ul> </ul>  <ol> </ol>",
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