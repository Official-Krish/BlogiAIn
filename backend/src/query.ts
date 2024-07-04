import { Prisma } from "@prisma/client";

interface PostQueryBase {
	select: {
		content?: boolean;
		title?: boolean;
		id?: boolean;
		publishedDate?: boolean;
		author?: { select: { name: boolean, email?: boolean, details?: boolean, profilePic?: boolean } };
		published?: boolean;
	};
	orderBy?: Prisma.Enumerable<Prisma.PostOrderByWithRelationInput>;
}

interface SearchQueryWithWhere extends PostQueryBase {
	where?: any;
	skip?: number;
	take?: number;
}

interface UserQueryBase {
	select: {
		name: boolean;
		id: boolean;
		email: boolean;
	};
	where?: any;
	skip?: number;
	take?: number;
	orderBy?: Prisma.Enumerable<Prisma.PostOrderByWithRelationInput>;
}

interface TagQueryBase {
	select: {
		id: boolean;
		tagName: boolean;
	};
	where?: any;
	skip?: number;
	take?: number;
	orderBy?: Prisma.Enumerable<Prisma.PostOrderByWithRelationInput>;
}


export const buildPostSearchQuery = (keyword: string): SearchQueryWithWhere => {
	let baseQuery: SearchQueryWithWhere = {
		select: {
			title: true,
			id: true,
			publishedDate: true,
			author: { select: { name: true, details: true,  email: true } },
		},
		where: {
			OR: [
				{
					title: {
						contains: keyword,
						mode: "insensitive",
					},
				},
				{
					content: {
						contains: keyword,
						mode: "insensitive",
					},
				},
				{
					author: {
						name: {
							contains: keyword,
							mode: "insensitive",
						},
					},
				},
			],
		},
		skip: 0,
		take: 5,
	};

	return baseQuery;
};

export const buildUserSearchQuery = (keyword: string): UserQueryBase => {
	let baseQuery: UserQueryBase = {
		select: {
			id: true,
			name: true,
			email: true,
		},
		where: {
			name: {
				contains: keyword,
				mode: "insensitive",
			},
		},
		skip: 0,
		take: 5,
	};

	return baseQuery;
};

export const buildTagSearchQuery = (keyword: string): TagQueryBase => {
	let baseQuery: TagQueryBase = {
		select: {
			id: true,
			tagName: true,
		},
		where: {
			tagName: {
				contains: keyword,
				mode: "insensitive",
			},
		},
		skip: 0,
		take: 5,
	};

	return baseQuery;
};
