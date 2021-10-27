defmodule HeatTags.Message do
  use Ecto.Schema

  import Ecto.Changeset

  schema "messagesList" do
    field :message, :string
    field :username, :string
    field :email, :string

    timestamps()
  end
end
