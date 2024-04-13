import { ChangeEvent, FormEvent } from "react";

interface Props {
    handleChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    handleChangeAvatar: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit(event: FormEvent): void;
    avatarShopValue: string;
    titleShopValue: string;
}

export function Form(
    {
        handleChangeAvatar,
        handleChangeTitle,
        handleSubmit,
        avatarShopValue,
        titleShopValue
    }: Props
) {
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className="input-modal"
                        placeholder="Enter title shop"
                        value={titleShopValue}
                        onChange={handleChangeTitle}
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter avatar shop"
                        value={avatarShopValue}
                        onChange={handleChangeAvatar}
                    />
                    <p className="helper text-center mt-5">By clicking Create, you agree to the User Agreement, Site Rules acknowledge that our Privacy Policy applies.</p>
                    <button className="upperCase button-change mt-3">Create</button>
                </div>
            </form>
        </div>
    )
}