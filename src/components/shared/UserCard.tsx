import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Models } from "appwrite";

const UserCard = ({ user }: { user: Models.Document }) => {
	return (
		<div className="flex-center flex-col gap-4 border border-dark-4 rounded-[20px] px-3 py-5 w-full">
			<Link to={`/profile/${user.$id}`} className="flex-center flex-col">
				<img
					src={user.imageUrl}
					alt={user.username}
					className="h-14 w-14 rounded-full mb-4"
				/>
				<p className="small-medium text-light-1 text-center">
					{user.name}
				</p>
				<p className="tiny-medium text-light-3 text-center">
					&#64;{user.username}
				</p>
			</Link>

			<Button className="shad-button_primary">Follow</Button>
		</div>
	);
};

export default UserCard;
