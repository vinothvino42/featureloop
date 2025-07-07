import { ChevronUp, MessageCircle } from "lucide-react";

export default function FeaturesListItem() {
  return (
    <li>
      <div className="my-4 flex items-center gap-4 rounded-xl border-[1px] p-4 shadow-2xs">
        <div className="bg-muted rounded-xl p-4">
          <ChevronUp strokeWidth={3.75} color="var(--color-primary)" />
          <p>246</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[16px] font-semibold">
            Add dark mode and light mode feature
          </p>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur iusto sapiente ratione quis mollitia? Natus repellat
            obcaecati nam, beatae explicabo tempore ducimus ratione quo nesciunt
            cupiditate voluptas quam excepturi nulla?
          </p>
          <div className="flex justify-between">
            <p className="text-sm text-gray-400">Upvoted: 07 Feb 2025</p>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-green-100 px-2 py-0.5">
                <p className="text-sm text-green-500">Approved</p>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <p>24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
