import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import UserCard from "@/components/shared/UserCard";
import {
	useGetRecentPosts,
	useGetUsers,
} from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

function Home() {
	const {
		data: posts,
		isPending: isPostLoading,
		isError: isErrorPosts,
	} = useGetRecentPosts();

	const {
		data: creators,
		isLoading: isUserLoading,
		isError: isErrorCreators,
	} = useGetUsers(10);

	return (
		<div className="flex flex-1">
			<div className="home-container">
				<div className="home-posts">
					<h2 className="h3-bold md:h2-bold text-left w-full">
						Home Feed
					</h2>
					{isPostLoading && !posts ? (
						<Loader />
					) : (
						<ul className="flex flex-col flex-1 gap-9 w-full">
							{posts?.documents.map((post: Models.Document) => (
								<PostCard key={post.$id} post={post} />
							))}
						</ul>
					)}
				</div>
			</div>
			<div className="home-creators">
				<h3 className="h4-bold md:h3-bold text-left w-full">
					Top Creators
				</h3>
				{isUserLoading && !creators ? (
					<Loader />
				) : (
					<div className="w-full grid grid-cols-2 place-items-center gap-7">
						{creators?.documents.map((user: Models.Document) => (
							<UserCard key={user.$id} user={user} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Home;
