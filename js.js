// store all data in an array of objects
   const tData = [
    {
        "elementName": "JS OUTPUT",
        "tagName": "alert() / console.log()",
        "function": "Function: debug and display messages to the user or developer."
    },
    {
        "elementName": "JS VARIABLES",
        "tagName": "Tag: Literals, var, let, const",
        "function": "Function: Used to store data values that can be used and manipulated throughout the code."
    },
    {
        "elementName": "JS STATEMENTS",
        "tagName": "Tag: x=5 + 2",
        "function": "Function:statements are composed of values, operators, expressions, keywords, and comments."
    },
    {
        "elementName": "Comments",
        "tagName": "Tag: //... or /*...*/",
        "function": "Function: comments are used to explain code and make it more readable."
    },
    {
        "elementName": "Operators",
        "tagName": "Tag: Assignment Operator",
        "function": "Function: Assignment Operators are used to assign values to variables."
    },
    {
        "elementName": "Operators",
        "tagName": "Tag: Addition Operator",
        "function": "Function: addition operatior + adds numbers"
    },
    {
        "elementName": "Operators",
        "tagName": "Tag: Multiplication Operator",
        "function": "Function: multiplication operatior * multiplies numbers"
    },
     {
        "elementName": "Conditionals",
        "tagName": "Tag: if...else",
        "function": "Function Use if to specify a code block to be executed, if a specified condition is true."
    },
     {
        "elementName": "Ternary Operator",
        "tagName": "Tag: (condition) ? value1 : value2",
        "function": "Function:The conditional (ternary) operator is the only JavaScript operator that takes three operands."
    },
     {
        "elementName": "Switch Statement",
        "tagName": "Tag: switch...case",
        "function": "Function: is used to perform different actions based on different conditions."
    },
     {
        "elementName": "Booleans",
        "tagName": "Tag: true / false",
        "function": "Function:a Boolean represents one of two values: true or false."
    },
     {
        "elementName": "Logical Operators",
        "tagName": "Tag: && / || / !",
        "function": "Function: used to combine multiple boolean expressions or to invert a boolean value."
    },
     {
        "elementName": "Loops",
        "tagName": "Tag: for / while / do...while",
        "function": "Function: used to repeat a block of code as long as a specified condition is true."
    },
     {
        "elementName": "Break Statement",
        "tagName": "Tag: break;",
        "function": "Function: used to exit a loop or switch statement before it has completed all its iterations."
    },
     {
        "elementName": "Continue Statement",
        "tagName": "Tag: continue;",
        "function": "Function: used to skip the current iteration of a loop and continue with the next iteration."
    },
     {
        "elementName": "Functions",
        "tagName": "Tag: Arrow Functions / Regular Functions",
        "function": "Function: Functions are blocks of code designed to perform a particular task and can be reused."
    },
     {
        "elementName": "Objects",
        "tagName": "Tag: Object Literals",
        "function": "Function: Objects are collections of properties, and a property is an association between a name (or key) and a value."
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