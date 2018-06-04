###############################################################################
#                                                                             #
#                                                                             #
#                                                                             #
###############################################################################
# TODO: 
# Faire en sorte que les credential soient lus depuis un fichier externe pour
# que le fichier .js et ce script utilisent les mêmes infos. 
# 
# Packages --------------------------------------------------------------------

library(reticulate)
library(tidyverse)
library(magrittr)
library(jsonlite)
library(glue)

# importing keen.io python api ------------------------------------------------
keen_library <- import("keen.client")

keen_client <- keen_library$KeenClient(
  project_id = "5a785d80c9e77c0001ad575c",
  read_key = "CBE42F837E86E21003DF335C27D64D3B327497B6BEB3B305AB826CA5888CD4EF114E2854DAD436AA87135BF3677C67B7598FEAAABB288C6EBEF1A6C2144B3ABF2C519FBB4DD617C523BD01A8AD71E1ADB5A723790458D7A9A4043309E7A6AEBB"
)


# Get data from keen python API -----------------------------------------------
keen_session   <- 
  keen_client$extraction(event_collection = "session_id",
                         timeframe = "this_month")

keen_iat_trial_raw <- 
  keen_client$extraction(event_collection = "iat_trial",
                         timeframe = "this_month")


# Data wrangling --------------------------------------------------------------
# session ---------------------------------------------------------------------
# vaast_trial -----------------------------------------------------------------
# iat_trial -------------------------------------------------------------------

keen_iat_trial_meta <- 
  keen_iat_trial_raw %>%
  map_df(~ data_frame(keen_id        = .x$keen$id,
                      keen_timestamp = .x$keen$timestamp,
                      session_id     = .x$session_id,
                      iat_trial_data = .x$trial_data),
         .id = "index") 


keen_iat_trial_data <-
  keen_iat_trial_meta %>% 
  pull(iat_trial_data) %>% 
  map_df(~fromJSON(.x),
         .id = "index")

tidy_iat_trial <-
  keen_iat_trial_meta %>% 
  select(-iat_trial_data) %>% 
  left_join(keen_iat_trial_data, 
            by = "index")

write_csv(
  tidy_iat_trial, 
  path = glue("data/{lubridate::today()}_iat_data.csv")
)
