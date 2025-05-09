import { div } from "framer-motion/client"
import CommentCard from './CommentCard';

function CommentsSection() {
  return (
    <div className="flex flex-col justify-center gap-5 mt-8  ">
    <h3 className="font-abrilFatface text-cafeCacao text-4xl ml-16">Our Happy Customers</h3>
    <div className="w-full h-[220px] flex items-center justify-center gap-8">
        <CommentCard
        stars={5}
        name="Sarah M."
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <CommentCard
            stars={4}
            name="Alex K."
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <CommentCard
            stars={5}
            name="James L."
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <CommentCard
            stars={4}
            name="Stepehen C."
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />      
    </div> 
    </div> 
  )
}

export default CommentsSection