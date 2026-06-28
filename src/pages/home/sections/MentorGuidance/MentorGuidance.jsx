import { Box, Card, CardContent, Typography } from "@mui/material";
import { sectionStyle, sectionTitle } from "../../../../styles/globalStyles";
import {
  mentorCard,
  mentorCardContent,
  mentorCardQuoteIcon,
  mentorCardWrapper,
  mentorContainer,
} from "./mentorGuidanceStyles";
import { mentorData } from "../../../../data/mentorData";
import { FormatQuote } from "@mui/icons-material";
import ConsulationCard from "./ConsulationCard";

function MentorGuidance() {
  return (
    <>
      <Box sx={sectionStyle} component="section">
        <Typography component="h4" sx={sectionTitle}></Typography>
        <Box sx={mentorContainer}>
          <Box sx={mentorCardWrapper}>
            {mentorData.map((item, i) => (
              <Card key={i} sx={mentorCard}>
                <FormatQuote sx={mentorCardQuoteIcon} />
                <CardContent sx={mentorCardContent}>
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: "32px", whiteSpace: "pre-line" }}
                  >
                    {item.text}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "primary.main" }}
                  >
                    {item.mentorName}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <ConsulationCard />
        </Box>
      </Box>
    </>
  );
}

export default MentorGuidance;
