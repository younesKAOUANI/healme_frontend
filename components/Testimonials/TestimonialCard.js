// Testimonials.js

const testimonialsData = [
    {
        id: 1,
        quote: "Very easy this was to integrate",
        text: "et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim",
        author: "Bonnie Green",
        position: "Developer at Open AI",
        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
    },
    {
        id: 2,
        quote: "Solid foundation for any project",
        author: "Roberta Casas",
        text: "et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim",
        position: "Lead designer at Dropbox",
        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
    },
    {
        id: 3,
        quote: "Mindblowing workflow",
        author: "Jese Leos",
        text: "et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim",
        position: "Software Engineer at Facebook",
        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
    },
    {
        id: 4,
        quote: "Insane Accuracy",
        author: "Jessee White",
        text: "et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim",
        position: "Civil Engineer at Facebook",
        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
    },
];

export default function TestimonialCard() {
    return (
        <div className="container mx-auto py-24">
            <h3 className="text-center text-5xl pb-6">Testimonials</h3>
            <div className="grid gap-4 mb-8 px-6 md:pd-0  md:mb-12 md:grid-cols-2 bg-white">
                {testimonialsData.map(testimonial => (
                    <figure key={testimonial.id} className="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded-lg  md:rounded-lg shadow-md ">
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                            <h3 className="text-lg font-semibold text-gray-900">{testimonial.quote}</h3>
                            <p className="my-4">{testimonial.text}</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img className="rounded-full w-9 h-9" src={testimonial.avatar} alt="profile picture" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                <div>{testimonial.author}</div>
                                <div className="text-sm text-gray-500 ">{testimonial.position}</div>
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </div>
    );
}
