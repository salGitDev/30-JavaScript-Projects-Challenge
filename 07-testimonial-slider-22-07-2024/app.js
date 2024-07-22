let p1url = "https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.webp?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=";
let p2url = "https://media.istockphoto.com/id/2065472092/photo/african-american-worker-at-the-warehouse-planning-the-storage.jpg?s=1024x1024&w=is&k=20&c=XwYwQB1xEELGm0Hisb3EAA7mVugvlRso8C7MnpdXzg4=";
let p3url = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let p4url = "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let p5url = "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let p6url = "https://plus.unsplash.com/premium_photo-1664099905313-f391570783fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let text1 =  "I've been using Apple products for years, and I can confidently say they have transformed my daily life. The seamless integration between devices makes everything—from my iPhone to my MacBook—effortlessly connected.z";
let text2 = "I’ve been enjoying apples for years, but ever since I discovered the incredible variety of flavors and textures, they've become a staple in my diet! Whether I'm biting into a crisp Honeycrisp for a refreshing snack or baking with sweet Fuji apples in my favorite pie, they never fail to impress. Not only are they delicious, but they also keep me energized throughout the day.";
let text3 = "We expected to be more productive but were astounded to learn that not having to coordinate schedules via multiple emails makes us 80% more productive.";
let text4 = "Office 365 allows us to enjoy the same powerful business productivity tools as larger enterprises, while also giving our growing organization the flexibility and scalability to stay competitive in today’s connected marketplace. We’re excited about Office 365 and confident that it’ll play a key role in taking the performance of our business to the next level.";
let text5 = "Using technology to collaborate didn't exist at this company until we started this process. With the connectivity and seamless interaction of the Office 365 services, we made it easy for employees to access the people and information that they need to get to, which makes it easier for them to do the things they need to do.";
let text6 = "We didn’t need to look at any other solution. We know that with Microsoft and Office 365, we can easily set it up additional shared sites and get right to work. The increased organisation and efficiency internally will only help us better serve our communities.";
let name1 = "Sarah M."; let name2 = "Sarah T."; let name3 =  "Daniel Soh"; let name4 = "Bobby Jimenez"; let name5 =  "Vito Forte"; let name6 = "Marion Dowd";

const testimonials = [
    {
        name: name1,
        photourl: p1url,
        text: text1
    },

    {
        name:  name2,
        photourl: p2url,
        text: text2
    },
    {
        name:  name3,
        photourl: p3url,
        text: text3
    },
    {
        name:  name4,
        photourl: p4url,
        text: text4
    },
    {
        name:  name5,
        photourl: p5url,
        text: text5
    },
    {
        name:  name6,
        photourl: p6url,
        text: text6
    }
];

let index = 0;
updateTestimonial();

function updateTestimonial(imgEl, textEl, usernameEl){
    
    imgEl = document.querySelector("img");
    textEl = document.querySelector(".text");
    usernameEl = document.querySelector(".user-name")
    const {name, photourl, text} = testimonials[index];
    imgEl.src = photourl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    index++;
    if(index === testimonials.length){
        index = 0;
    }
    setTimeout(()=>{
        updateTestimonial();
    }, 10000)
}