import { StarIcon } from "@heroicons/react/24/solid"
import { CheckBadgeIcon } from "@heroicons/react/16/solid"

function CommentCard({ stars, name, message }) {
  return (
    <div className="flex flex-col gap-2 border-1 border-cafeCacao p-4 rounded-lg w-[260px]"> 
        <div className="flex items-center gap-2">
            {[...Array(stars)].map((_, index) => (
                <StarIcon key={index} className="h-5 w-5 text-cafeAvellana" />
            ))}
        </div>
        <div className="flex items-center gap-2">
            <p>{name}</p>
            <CheckBadgeIcon className="h-3 w-3 text-cafeCacao" />
        </div>
        <div className="text-cafeCacao text-tiny">
            <p>{message}</p>
        </div>
    </div>
  )
}

export default CommentCard