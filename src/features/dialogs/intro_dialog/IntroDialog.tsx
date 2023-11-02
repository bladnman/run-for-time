import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  ModalDialog,
  Typography,
} from "@mui/joy";
import useBreakSize from "@/hooks/useBreakSize.ts";
import useSheetConfigStore from "@store/SheetConfigStore.ts";
import useMegaStore from "@store/MegaStore.ts";

export default function IntroDialog() {
  const isIntroDialogOpen = useMegaStore((state) => state.isIntroDialogOpen);
  const setIsIntroDialogOpen = useMegaStore(
    (state) => state.setIsIntroDialogOpen,
  );
  const hasSeenIntro = useSheetConfigStore((state) => state.hasSeenIntro);
  const setHasSeenIntro = useSheetConfigStore((state) => state.setHasSeenIntro);
  const { isLtSm } = useBreakSize();

  const handleClose = () => {
    setHasSeenIntro(true);
    setIsIntroDialogOpen(false);
  };

  return (
    <Modal onClose={handleClose} open={!hasSeenIntro || isIntroDialogOpen}>
      <ModalDialog layout={isLtSm ? "fullscreen" : "center"} size={"sm"}>
        <DialogTitle>
          <Typography level="h2">Running for Time</Typography>
        </DialogTitle>

        <DialogContent>
          {/* --- */}
          <Typography>
            This simple tool helps you build tracking sheets for your running
            training. It follows a <strong>time based </strong>
            running philosophy, where you focus on running for a certain amount
            of time, rather than a certain distance. If you follow it, I
            guarantee you will be successful at becoming a runner and learning
            to actually enjoy running. Don't go too far to fast. Take your time.
            You can do it!
            <br />
            <br />
          </Typography>
          {/* --- */}
          <Typography level={"h3"}>Print Me!</Typography>
          <Typography>
            One of the main purposes of this tool is to help you build a
            printable tracking sheet. You can then print it out and stick it on
            your fridge or wall, and use it to track your progress. This is
            HIGHLY advised. Seeing it every day and declaring your progress is a
            great way to keep yourself motivated.
            <br />
            <br />
            You can also use this tool to track your progress digitally, but
            it's not as fun. If you decide to do this keep in mind that your
            progress is tracked in your browser's local storage. It won't sync
            across devices. And the data could be lost if you clear your
            browser's cache. It should be okay, but YMMV.
            <br />
            <br />
          </Typography>

          {/* --- */}
          <Typography level={"h3"}>Running</Typography>
          <Typography>
            A quick note about the philosophy behind this tool. You will see
            notes like "2 x 12" on the sheet. This means you should run for 12
            minutes, then walk for 4 minutes, then run for another 12 minutes.
            You can decide how long you walk, but the idea is to keep it short
            enough to remember you're running, but long enough to recover.
            <br />
            <br />
            There is 1 long-run day per week. This is the day you run for the
            longest amount of time. This is always a single effort. The other
            days are shorter runs, with recovery walks in between. The long-run
            is at the end of the week (you can choose which day). This is
            intentional. The idea of this whole plan is each week prepares you
            for the long run.
            <br />
            <br />
            Remember, your pace and distance DOES NOT MATTER! You are running
            for time. If you are running too fast, slow down. If you think you
            cannot complete the run, slow down. And your long run should be
            slower than your shorter runs. Not sure we said this but... SLOW
            DOWN.
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Let's go!</Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  );
}
