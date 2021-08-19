import React from 'react';
import { useChat } from 'context';
import { useResolved } from 'hooks';
import { Loader } from 'semantic-ui-react';
import { ChatList, RailHeader } from 'components';

export const Sidebar = () => {
	const { myChats, createChatClick } = useChat();
	const chatsResolved = useResolved(myChats);

	return (
		<div className="sidebar">
			<RailHeader />
			{chatsResolved ? (
				<>
					{!!myChats.length ? (
						<div className="chat-list-container">
							<ChatList />
						</div>
					) : (
						<div className="chat-list-container no-chats-yet">
							<h3>You haven't started a conversation yet...</h3>
						</div>
					)}
					<button
						className="create-chat-button"
						onClick={createChatClick}
					>
						Create Chat
					</button>
				</>
			) : (
				<div className="chats-loading">
					<Loader active size="huge" />
				</div>
			)}
		</div>
	);
};