import React from 'react';
import CardDetails from '@/components/BlogsCardDetails/CardDetails';
import { blogsCardDetails } from '@/components/Data/Data';

export default function DynamicRoute({ params }: { params: { slug:string } }) {
    const blogDetails = blogsCardDetails.find((blog) => blog.blogName === params.slug);

    if (!blogDetails) {
        return <div>Blog not found</div>;
    }

    const { blogName, firstHeading, firstPara, secondHeading, secondPara, thirdHeading, thirdPara,
        fourthHeading, fourthPara, fifthHeading, fifthPara, image} = blogDetails;

    return (
        <div>
            <CardDetails
                blogName={blogName.toUpperCase()}
                firstHeading={firstHeading}
                firstPara={firstPara}
                secondHeading={secondHeading}
                secondPara={secondPara}
                thirdHeading={thirdHeading}
                thirdPara={thirdPara}
                fourthHeading={fourthHeading}
                fourthPara={fourthPara}
                fifthHeading={fifthHeading}
                fifthPara={fifthPara}
                image={image}
            />
        </div>
    );
}

