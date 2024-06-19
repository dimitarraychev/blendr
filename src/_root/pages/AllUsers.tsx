import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const AllUsers = () => {
	const {
		data: creators,
		isLoading: isUserLoading,
		isError: isErrorCreators,
	} = useGetUsers();

	return (
		<div className="common-container">
			<div className="flex gap-2 w-full max-w-5xl">
				<img
					src="/assets/icons/people.svg"
					width={36}
					height={36}
					alt="edit"
					className="invert-white"
				/>
				<h2 className="h3-bold md:h2-bold text-left w-full">
					All Users
				</h2>
			</div>

			{isUserLoading && !creators ? (
				<Loader />
			) : (
				<div className="user-grid">
					{creators?.documents.map((user: Models.Document) => (
						<UserCard key={user.$id} user={user} />
					))}
				</div>
			)}
		</div>
	);
};

export default AllUsers;
