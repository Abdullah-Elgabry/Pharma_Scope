import csv
from django.core.management.base import BaseCommand
from Food_Interaction_app.models import Drug, Interaction


class Command(BaseCommand):
    help = 'Import data from a CSV file'

    def add_arguments(self, parser):
        parser.add_argument('file_path', type=str, help='Path to the CSV file')

    def handle(self, *args, **kwargs):
        file_path = kwargs['file_path']
        interactions_created = 0
        with open(file_path, 'r') as csv_file:
            reader = csv.DictReader(csv_file)
            for row in reader:
                if 'Drug Name' not in row or 'Description' not in row:
                    self.stdout.write(self.style.ERROR("Missing required columns in CSV file."))
                    return
                drug_name = row['Drug Name']
                interaction_description = row['Description']

                drug, created = Drug.objects.get_or_create(name=drug_name)
                if not created:
                    existing_interaction = Interaction.objects.filter(drug=drug,
                                                                      description=interaction_description).exists()
                    if existing_interaction:
                        self.stdout.write(self.style.WARNING(
                            f"Interaction '{interaction_description}' for drug '{drug_name}' already exists."))
                        continue

                interaction = Interaction.objects.create(drug=drug, description=interaction_description)
                interactions_created += 1

        self.stdout.write(self.style.SUCCESS(f"Created {interactions_created} interactions."))


# python manage.py import_data Food_Interaction_app/Data/food_interaction.csv
