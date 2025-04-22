import AudienceGrowth from "./bento-grid-items/audience-growth";
import ConsistentSchedule from "./bento-grid-items/consistent-schedule";
import CreatePost from "./bento-grid-items/create-post";
import GrowFollowers from "./bento-grid-items/grow-followers";
import ManageAccounts from "./bento-grid-items/manage-accounts";
import SchedulePosts from "./bento-grid-items/schedule-posts";
import SocialMedia from "./bento-grid-items/social-media";
import WriteYourContent from "./bento-grid-items/write-your-content";

export default function BentoGrid() {
  return (
    <section className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4">
      <div className="grid gap-8 sm:col-span-3 sm:grid-cols-3 lg:col-start-2">
        <SocialMedia className="sm:col-span-2" />
        <ManageAccounts />
        <ConsistentSchedule />
        <SchedulePosts className="sm:col-start-3 sm:row-span-2 sm:row-start-1" />
      </div>

      <div className="grid gap-8 sm:col-span-3 sm:grid-cols-3 lg:col-start-2">
        <GrowFollowers className="sm:col-span-2 sm:col-start-2" />
        <AudienceGrowth className="sm:col-start-1 sm:row-start-1" />
      </div>

      <div className="flex flex-col gap-8 sm:col-span-3 sm:flex-row lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:flex-col">
        <CreatePost />
        <WriteYourContent />
      </div>
    </section>
  );
}
