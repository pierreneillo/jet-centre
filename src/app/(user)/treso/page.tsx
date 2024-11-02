import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import { Metadata } from 'next';

export const metadata = {
    title: 'Trésorerie',
} satisfies Metadata;

export default function TreasuryPage() {
    return (
        <div className="flex space-x-main">
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>Gestion de la trésorerie</BoxTitle>
                </BoxHeader>
                <BoxContent>
                    <div className="space-y-6">
                        <section>
                            <h3 className="text-lg font-semibold mb-4">Vue d'ensemble</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="p-4 bg-box-title rounded-md">
                                    <p className="text-sm text-muted-foreground">
                                        Trésorerie totale
                                    </p>
                                    <p className="text-2xl font-semibold">0.00 €</p>
                                </div>
                                <div className="p-4 bg-box-title rounded-md">
                                    <p className="text-sm text-muted-foreground">
                                        Entrées (mois en cours)
                                    </p>
                                    <p className="text-2xl font-semibold text-green-500">+0.00 €</p>
                                </div>
                                <div className="p-4 bg-box-title rounded-md">
                                    <p className="text-sm text-muted-foreground">
                                        Sorties (mois en cours)
                                    </p>
                                    <p className="text-2xl font-semibold text-red-500">-0.00 €</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold mb-4">Opérations récentes</h3>
                            <div className="space-y-4">
                                <div className="bg-box-title rounded-md p-4">
                                    <p className="text-muted-foreground">
                                        Aucune opération récente
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </BoxContent>
            </Box>
        </div>
    );
}
